package com.ers.reimbursement;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ers.user.User;

@Repository
public interface ReimbursementRepository extends JpaRepository<Reimbursement, Long>{

	List<Reimbursement> findByUser(User user);
	
	//find by status
	List<Reimbursement> findByStatus(ReimbursementStatus status);
	
	//find by author id
	List<Reimbursement> findByAuthorId(Integer authId);
	
	//find by type
	List<Reimbursement> findByType(ReimbursementType type);
	
	//find by submitted
	List<Reimbursement> findbySubmitted(LocalDateTime submission);
	
	//find by amount
	List<Reimbursement> findbyAmount(BigDecimal reimbAmount);
	
//	Let's see an example of a method that finds passengers by last name and orders by seat number:
//	List<Passenger> findByLastNameOrderBySeatNumberAsc(String lastName);
	
	//find by status and sort/order by amount ascending
	List<Reimbursement> findByStatusOrderByAmountAsc();
	
	//find by status and sort/order by amount descending
	List<Reimbursement> findByStatusOrderByAmountDesc();
	
	
}
