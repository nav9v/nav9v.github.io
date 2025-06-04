#!/bin/bash
# Automated transition when nav9v.me expires

echo "🚀 Starting domain transition..."

# Update submodule to latest
git submodule update --remote --merge

# Build Next.js in submodule
cd portfolio
npm install
npm run build  # Creates 'out' folder for static export

# Move built files to root
cd ..
cp -r portfolio/out/* .
rm index.html  # Remove redirect

# Preserve old portfolio
# (old/ folder remains untouched)

# Commit changes
git add .
git commit -m "🎯 Transition: Deploy Next.js to github.io domain"
git push

echo "✅ Transition complete!"
echo "📍 nav9v.github.io → Next.js Portfolio"
echo "📍 nav9v.github.io/old → Legacy Portfolio"