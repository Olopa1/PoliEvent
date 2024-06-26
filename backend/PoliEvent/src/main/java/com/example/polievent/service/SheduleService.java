package com.example.polievent.service;

import com.example.polievent.DAO.Shedule;
import com.example.polievent.DAO.SheduleRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class SheduleService {
    @Autowired
    private final SheduleRepository sheduleRepository;

    public SheduleService(SheduleRepository sheduleRepository){this.sheduleRepository = sheduleRepository;}
    public List<Shedule> listAll(){return sheduleRepository.findAll();}
    public List<Shedule> listAllWithId(Long id){return sheduleRepository.listAllWithUserId(id);}
    public void addShedule(Shedule shedule){
        Optional<Shedule> sheduleOptional = sheduleRepository.findSheduleById(shedule.getId());
        if(sheduleOptional.isPresent()){
            throw new IllegalStateException("ID taken");
        }
        sheduleRepository.save(shedule);
    }
    public void deleteShedule(Long id){
        List<Shedule> shedule = sheduleRepository.listAllWithUserId(id);
        if(shedule.isEmpty()){
            throw new IllegalStateException("ID not found");
        }
        for(Shedule value : shedule){
            sheduleRepository.deleteById(value.getId());
        }
    }
}
