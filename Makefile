initialize-build:
	mkdir dist 2>/dev/null || true
	cp -R build/extension_template/* dist/

build-extension:
	npm install && npx webpack

post-build:
	node build/scripts/post-build.js

clean:
	rm -rf dist

all: clean initialize-build build-extension post-build
