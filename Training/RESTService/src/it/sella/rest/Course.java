package it.sella.rest;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Course {
	private Long id;
	private String courseName;
	
	public String getCourseName() {
		return courseName;
	}
	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	public String toCompleteString(){
		return id+"-->"+courseName;
	}
	
	public String toString(){
		return courseName;
	}
	 
}
