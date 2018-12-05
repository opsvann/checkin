package com.unipe.demo.evento;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import java.util.List;

@RepositoryRestResource
interface EventoRepository extends JpaRepository<Evento, Long> {

  Evento findByNome(String nome);
  List<Evento> findAllByPerfisId(String id);

}
