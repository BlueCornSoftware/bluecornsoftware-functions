
echo
echo "(Pre-Receive)"
echo

now=$(date +%s)
npm run build
build_files_changed=$(git status --porcelain | sed s/^...// | grep ^dist/)

if [ "$build_files_changed" ]; then
  git add dist/*
  git commit -m "(Pre-Receive) auto-generated-commit for build time: $now"
fi
