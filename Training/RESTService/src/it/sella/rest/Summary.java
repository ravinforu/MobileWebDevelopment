package it.sella.rest;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Summary {
	private String city;
	private Double temperature;
	
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public Double getTemperature() {
		return temperature;
	}
	public void setTemperature(Double temperature) {
		this.temperature = temperature;
	}
	
}
