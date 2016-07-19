<?php
$json = '{
  "key1": "value1",
  "key2": "value2",
  "key3": {
    "key4": "value4"
  }
}';

$assoc_arrray = json_decode($json);
$urlEncodedString = http_build_query($assoc_array);

echo  "<div>" + . ($urlEncodedString) . + "</div>";

?>