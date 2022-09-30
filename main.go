package main

import (
	"log"
	"net/http"
)

func main() {
	indexFs := http.FileServer(http.Dir("./"))
	http.Handle("/", indexFs)
	staticFs := http.FileServer(http.Dir("./static"))
	http.Handle("/static/", http.StripPrefix("/static/", staticFs))
	wellKnownFs := http.Dir("./.well-known")
	http.Handle("/apple-app-site-association", http.FileServer(wellKnownFs))
	http.Handle("/.well-known/", http.StripPrefix("/.well-known/", http.FileServer(wellKnownFs)))

	log.Print("Listening on: 3000")
	err := http.ListenAndServe(":3000", nil)
	if err != nil {
		log.Fatal(err)
	}
}
