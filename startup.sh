#!/bin/bash
if [[ -z "${PORT}" ]]; then
  webdev serve  --hostname 0.0.0.0
  echo "webdev serve  --hostname 0.0.0.0"
else
  webdev serve web:${PORT} --hostname 0.0.0.0
  echo "webdev serve web:${PORT} --hostname 0.0.0.0"
fi