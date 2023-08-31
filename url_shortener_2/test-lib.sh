
curl='curl --fail --silent --show-error'

if ! jq --version > /dev/null ; then
  echo "jq is not installed. Please install it with 'brew install jq' and try again"
  exit 1
fi

function post(url, payload, expected_field) {
  local output_file='/tmp/output.json'
  rm -f "$output_file"
  $curl -d "$payload" "$url" -o "$output_file"
  cat $output_file | jq -r ".$expected_field"
}

function get(url, expected_field) {
  local output_file='/tmp/output.json'
  rm -f "$output_file"
  $curl "$url" -o "$output_file"
  cat $output_file | jq -r ".$expected_field"
}

function assert_equal(expected, actual, message) {
  if [ "$expected" != "$actual" ]; then
    echo "$message"
    diff <( printf '%s\n' "$expected" ) <( printf '%s\n' "$actual" )
    exit 1
  fi
}

function assert_equal(expected, actual, message) {
  if [ "$expected" != "$actual" ]; then
    echo "$message"
    diff <( printf '%s\n' "$expected" ) <( printf '%s\n' "$actual" )
    exit 1
  fi
}