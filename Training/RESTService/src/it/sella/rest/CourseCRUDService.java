package it.sella.rest;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("course")
public class CourseCRUDService {
	private static Map<Long, Course> courses = new HashMap<Long, Course>();
	
	@GET
	public String getInfo(){
		return "This is Course CRUD REST Service";
	}
	
	@GET
	@Path("/all")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Course> getAll(){
		List<Course> courseList = new ArrayList<Course>(courses.values());
		return courseList;
	}

	@GET
	@Path("/list")
	@Produces(MediaType.APPLICATION_JSON)
	public String getAllCourse(){
		String courseList = "";
		for(Course course: courses.values()){
			courseList+=course.toCompleteString() + "\n";
		}
		return courseList;
	}

	@GET
	@Path("/show/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Course getCourse(@PathParam("id") Long id){
		return courses.get(id);
	}
	
	@GET
	@Path("/add/{courseName}")
	@Produces(MediaType.APPLICATION_JSON)
	public String addCourse(@PathParam("courseName") String courseName){
		Course newCourse = new Course();
		Long courseId = new Long(courses.size()+1);
		newCourse.setId(courseId);
		newCourse.setCourseName(courseName);
		courses.put(courseId, newCourse);
		return courseName + " successfully added";
	}

}
