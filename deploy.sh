#!/bin/bash
npm install
npm run build
rm -rf docs
mv build docs
echo josephlu.ca >> docs/CNAME