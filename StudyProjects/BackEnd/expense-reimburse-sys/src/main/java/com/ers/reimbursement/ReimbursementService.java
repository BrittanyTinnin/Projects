package com.ers.reimbursement;

import java.util.List;

public class ReimbursementService {

	private ReimbursementRepository reimbRepo;

	public ReimbursementService(ReimbursementRepository reimbRepo) {
		super();
		this.reimbRepo = reimbRepo;
	}

	public void saveReimbursement(Reimbursement reimbursement) {
		reimbRepo.save(reimbursement);
	}
	
	public List<Reimbursement> reimbursementsByAuthor(Reimbursement reimb){
		
		//view reimbursements only created by author
		//pull up the reimbursements and filter by author id
		return null;
		
	}

}
