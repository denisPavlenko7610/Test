git tag -a v1.0.0 -m "Initial release version 1.0.0"

git tag v2.0.0-release

git tag

git tag -l "v1.*"

git push origin v1.0.0


git checkout -b new-branch-from-tag v1.0.0

git tag -d v1.0.0

git push origin --delete v1.0.0

git show v1.0.0