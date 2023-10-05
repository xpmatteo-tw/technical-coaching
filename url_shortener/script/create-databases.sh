#!/bin/bash
#
# ===== Create the local databases =====
#
# Run this script at any time to reset your local databases.
# WARNING: your local data will be reset to the default without warning.
#
# === Background ===
#
# In app development we need at least 3 databases:
#
# 1. "development": for running the app locally
# 2. "test":        for running the unit tests locally
# 3. "production":  for running in production
#
# This script creates the first two.
#
# The primary benefit of this script is that it can be run at any time to
# ensure that your local databases are up to the latest version.
#
# In this project we use the simplest possible migration mechanism, that is,
# we execute a series of sequential sql scripts.  This is good enough for
# a lot of uses, though tools like Liquibase or Fliweight are better.
#
# Setting up a DB is 3 step process
# 1. Create Databases, Users, Roles and Grants (not supported on sqlite3)
# 2. Run all the migrations to create the schema
# 3. Run sql scripts containing initial data needed for application to function
#
# === end background ===


# stop the script at the first sign of trouble
set -eo pipefail

# ensure we are running from the root directory of the project
cd "$(dirname "$0")/.."

## Ensure the DBMS is installed
if ! env sqlite3 --version > /dev/null; then
    echo "Please install sqlite3"
    exit 1
fi

for db in ./db/data/development.db ./db/data/test.db; do
    db_name=$(basename $db)
    ## Step 0: destroy old local DBS
    echo "$db_name destroying... bye bye!"
    rm -f $db

    ## Step 1: create databases, users and grants
    ## not applicable to sqlite3, as it does not support users

    ## Step 2: run all the migrations to create the DB schema
    for migration in ./db/migrations/*; do
        echo "$db_name loading $(basename $migration)"
        sqlite3 $db < $migration
    done

    ## Step 3: load the seed default data
    echo "$db_name loading seed data"
    sqlite3 $db < ./db/seed/seed.sql
done

echo "done"
