package com.billTracker.demo.repository;


import org.springframework.data.repository.CrudRepository;
import com.billTracker.demo.model.Bill;
public interface BillRepository extends CrudRepository<Bill, Long>{


}
