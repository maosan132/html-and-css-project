#!/bin/bash
echo -e "\uD83D\uDD25 \uD83D\uDD25 \uD83D\uDD25 Beginning build \uD83D\uDD25 \uD83D\uDD25 \uD83D\uDD25"

firstline=$(head -n 1 source/changelog.md)
read -a splitfirstline <<< $firstline
version=${splitfirstline[1]}

echo "You are building version $version"
echo "Do you want to continue? (Enter "1" for yes, "0" for no )"
read versioncontinue

if [ $versioncontinue -eq 1 ] 
then
  for filename in source/*
  do
    if [ "$filename" == "source/secretinfo.md" ]
    then
      echo "Streaming and editing $filename"
      sed 's/42/XX/' $filename > build/secretinfo.md
    else
      echo "Copying $filename"
      cp $filename build/.
    fi
  done
  echo "Zipping build directory content ..."
  zip build/build.zip build/*
  echo "Build version $version contains:"
  ls -alt build/*
  echo "Commiting to Github..."
  git add .
  git commit -m "Adding build files"
else
  echo "Please come back when you are ready"
fi
