#!/bin/bash

cd content
echo 'export default {' > modificationDates.js
git ls-tree -r --name-only HEAD | while read filename; do
  echo "  \"$filename\":" \""$(git log -1 --format="%ad" -- $filename)"\", >> modificationDates.js
done
echo } >> modificationDates.js
cat modificationDates.js
