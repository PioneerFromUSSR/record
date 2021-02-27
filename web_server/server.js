/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */

'use strict';

var express = require('express');
var https = require('https');
var fs = require('fs');
var app = express();

app.use(express.static('../'));

  {
  var options = {
    key: fs.readFileSync('../security/cert.key'),
    cert: fs.readFileSync('../security/cert.pem')
  };

  // Create an HTTPS service.
  https.createServer(options, app).listen(8080);

  console.log('serving on https://localhost:8080');
  };
