#!/usr/bin/env bash
set -euo pipefail

# Required files
test -f "index.html"
test -f "script.js"

# Required IDs in HTML
grep -qi 'id="score"' index.html
grep -qi 'id="clickBtn"' index.html
grep -qi 'id="resetBtn"' index.html

# Title and lang present
grep -qi "<title>.*</title>" index.html
grep -qi '<html lang="' index.html