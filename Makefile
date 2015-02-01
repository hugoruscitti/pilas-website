deploy:
	ember build --environment production
	cp -r -f dist/* ../ghpages__pilas-website-test/
	cd ../ghpages__pilas-website-test/; git add --all .; git commit -m "update"; git push origin gh-pages
	
	@echo ""
	@echo " * Subiendo los cambios a: http://hugoruscitti.github.io/pilas-website-test "
	@echo ""
