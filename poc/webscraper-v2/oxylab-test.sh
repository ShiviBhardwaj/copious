#!/bin/bash
curl 'https://realtime.oxylabs.io/v1/queries' --user 'Shivi:w0rdP!ss1' -H 'Content-Type: application/json' -d '{"source": "amazon_search", "query": "deals of the day", "parse": "true", "domain": "com"}' -v 
