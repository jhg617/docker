package com.sist.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sist.backend.repository.EmpRepository;
import com.sist.backend.store.Emp;

@Service
public class EmpService {

    @Autowired
    private EmpRepository empRepository;

    public List<Emp> findAll(){
        return empRepository.findAll();
    }

    public Optional<Emp> findByEmpno(Long empno){
        return empRepository.findByEmpno(empno);
    }

    public List<Emp> findByDeptno(String deptno){
        return empRepository.findByDeptno(deptno);
    }

    public List<Emp> findByJobAndDeptno(String job, String deptno){
        return empRepository.findByJobAndDeptno(job, deptno);
    }

    public List<Emp> findByJobLikeAndDeptno(String job, String deptno){
        return empRepository.findByJobLikeAndDeptno(job, deptno);
    }

    public List<Emp> findByJobContainingAndDeptno(String job, String deptno){
        return empRepository.findByJobContainingAndDeptno(job, deptno);
    }
}
