package com.sist.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sist.backend.service.EmpService;

import lombok.RequiredArgsConstructor;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/emp")
public class EmpController {
    
    private final EmpService empService;

    @RequestMapping("/all")
    public Object findAll() {
        return empService.findAll();
    }
    
    @RequestMapping("/findByEmpno")
    public Object findByEmpno(@RequestParam("empno") Long empno) {
        return empService.findByEmpno(empno);
    }

    @RequestMapping("/findByJobAndDeptno")
    public Object findByJobAndDeptno(@RequestParam("job") String job,
    @RequestParam("deptno") String deptno) {
        return empService.findByJobAndDeptno(job, deptno); //list 객체가 넘어온다.
    }
}
