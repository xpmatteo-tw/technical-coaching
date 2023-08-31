#!/usr/bin/env bash

set -e

URL_TO_BE_SHORTENED='https://www.google.com'
SHORTEN_PAYLOAD='{"url":"https://www.google.com"}'
BASE_URL='http://localhost:8080'


# invoke the localhost:8000 server with the shorten endpoint and the payload.
# retrieve the result and extract the shortened url.
post "$BASE_URL/shorten" "$SHORTEN_PAYLOAD" 'shortened_url'

$CURL -d $SHORTEN_PAYLOAD $BASE_URL/shorten -o $OUTPUT_FILE
SHORTENED_URL=$(cat $OUTPUT_FILE | jq -r '.shortened_url')

# invoke the localhost:8000 server with the shortened url and retrieve the result.
# it should be the same as the original url to be shortened
$CURL $BASE_URL/retrieve?url=$SHORTENED_URL -o $OUTPUT_FILE
ACTUAL_URL=$(cat $OUTPUT_FILE | jq -r '.original_url')

if [ "$URL_TO_BE_SHORTENED" != "$ACTUAL_URL" ]; then
  echo "Original url is not the same as the one to be shortened"
  diff <( printf '%s\n' "$URL_TO_BE_SHORTENED" ) <( printf '%s\n' "$ACTUAL_URL" )
  exit 1
else
  echo "OK"
fi