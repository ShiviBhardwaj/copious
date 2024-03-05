#!/bin/bash
curl 'https://realtime.oxylabs.io/v1/queries' --user 'Shivi:w0rdP!ss1' -H 'Content-Type: application/json' -d '{"source": "universal_ecommerce", "url":"https://www.flipkart.com", "parse": "true"}' -v 
