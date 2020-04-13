package com.billTracker.demo.model;

import java.util.*;
import javax.persistence.*;

@Entity
@Table(name = "user")
public class User {
    @Column(unique=true)
    String email;
    String userName;
    String password;
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    List<Bill> bills = new ArrayList<>();
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getpassword() {
        return password;
    }

    public void setpassword(String password) {
        this.password = password;
    }

    public List<Bill> getBills() {
        return bills;
    }

    public void setBills(List<Bill> bills) {
        this.bills = bills;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
