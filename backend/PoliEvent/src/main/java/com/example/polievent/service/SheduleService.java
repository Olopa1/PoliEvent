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
    public Optional<Shedule> listAllWithId(Long id){return sheduleRepository.listAllWithUserId(id);}
    public void addShedule(Shedule shedule){
        Optional<Shedule> sheduleOptional = sheduleRepository.findSheduleById(shedule.getId());
        if(sheduleOptional.isPresent()){
            throw new IllegalStateException("ID taken");
        }
        sheduleRepository.save(shedule);
    }
    public void deleteShedule(Long id){
        Optional<Shedule> shedule = Optional.ofNullable(sheduleRepository.findSheduleById(id)
                .orElseThrow(() -> new IllegalStateException("ID not found")));
        sheduleRepository.deleteById(id);
    }
}
