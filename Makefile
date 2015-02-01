all:
	@echo "Comandos disponibles:"
	@echo ""
	@echo "   preview    Muestra el sitio de forma local."
	@echo "   deploy     Sube el sitio completo a la web."
	@echo ""
	
preview:
	ember serve

deploy:
	git add .
	git commit -m "actualizacion..."
	git push
	ember build --environment production
	cp -r -f dist/* ../ghpages__pilas-website-test/
	cd ../ghpages__pilas-website-test/; git add --all .; git commit -m "update"; git push origin gh-pages
	
	@echo ""
	@echo " * Subiendo los cambios a: http://hugoruscitti.github.io/pilas-website-test "
	@echo ""
