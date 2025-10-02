package com.sist.backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sist.backend.store.Emp;

public interface EmpRepository extends JpaRepository<Emp, Long>{
    Optional<Emp> findByEmpno(long empno);
    List<Emp> findByDeptno(String deptno);
    List<Emp> findByJobAndDeptno(String job, String deptno); //findByJobAndDeptno : AND조건식

    @Query(value = "select * from emp where job like concat('%',?1,'%') and deptno=:deptno=?2", nativeQuery = true)
    List<Emp> findByJobLikeAndDeptno(String job, String deptno);

    List<Emp> findByJobContainingAndDeptno(String job, String deptno);
}
