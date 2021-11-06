#!/bin/bash

set -euo pipefail

docker build . -t objectgraph

id=$(docker create objectgraph)
rm -rf docs/
mkdir docs
cd docs || exit 1
docker cp "$id:/work/build" - | tar --strip-components=1 -x

if [[ ${GITHUB_ACTIONS:-} ]]; then
    git config --global user.name 'Dan Farino'
    git config --global user.email dan.farino@gmail.com
    git checkout -b build
    git add -f .
    git commit -m "built from $GITHUB_REF at $GITHUB_SHA"

    # Note: specify target branch explicitly to avoid any accidental
    # force pushes if this script is edited incorrectly later.
    git push origin -f HEAD:build
fi
