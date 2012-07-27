package it.sella.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("reporter")
public class WeatherReporter {
	@GET
	public String getInfo(){
		return "I am a Weather Reporter";
	}
	
	@GET
	@Path("/summary/{city}")
	@Produces(MediaType.APPLICATION_JSON)
	public Summary getSummary(@PathParam("city") String city){
		Summary summary = new Summary();
		summary.setCity(city);
		summary.setTemperature(Math.random()*50);
		return summary;
	}

}
