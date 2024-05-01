package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// city represents data about a record city
type city struct {
	ID string `json:"id"`
	Name string `json:"name"`
	Latitude float64 `json:"latitude"`
	Longitude float64 `json:"longitude"`
}

var cities = []city{
	{ID: "1", Name: "Rouen", Latitude: 49.4431, Longitude: 1.0993},
	{ID: "2", Name: "Caen", Latitude: 49.1833, Longitude: -.3500},
	{ID: "3", Name: "Le Havre", Latitude: 49.4938, Longitude: 0.1077},
}

func main() {
	router := gin.Default()
	router.GET("/cities", getCities)
	router.GET("/cities/:id", getCityByID)
	router.POST("/cities", postCities)

	router.Run(":8080") // listen and serve on port 8080
}

// getCities responds with the list of all cities as JSON
func getCities(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, cities)
}

// postCities adds a city from JSON received in the request body.
func postCities(c *gin.Context) {
	var newCity city

	// Call BindJSON to bind the received JSON to newCities.
	if err:= c.BindJSON(&newCity); err != nil {
		return
	}

	// Add the new city to the slice.
	cities = append(cities, newCity)
	c.IndentedJSON(http.StatusCreated, newCity)
}

// getCityByID locates the city whose ID value matches the id
// parameter sent by the client, then returns that city as a response.
func getCityByID(c *gin.Context) {
	id := c.Param("id")

	// Loop over the list of cities, looking for
	// a city whose ID value matches the parameter.
	for _, a := range cities {
		if a.ID == id {
			c.IndentedJSON(http.StatusOK, a)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "album not found"})
}
