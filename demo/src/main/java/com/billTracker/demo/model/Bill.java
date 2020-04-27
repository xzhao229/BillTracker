package com.billTracker.demo.model;


import com.fasterxml.jackson.annotation.JsonBackReference;

import java.util.Date;
import javax.persistence.*;

@Entity // This tells Hibernate to make a table out of this class
public class Bill {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    Long id ;

    String category;

    String name;

    float value = 0;
    Date dueDate;
    String description;
    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="user_id")
    User user;


    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public float getValue() {
        return value;
    }

    public void setValue(float value) {
        this.value = value;
    }

    public Date getDueDate() {
        return dueDate;
    }

    public void setDueDate(Date dueDate) {
        this.dueDate = dueDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
