package com.unipe.demo.perfil;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
interface PerfilRepository extends JpaRepository<Perfil, Long> {

  Perfil findByNome(String nome);

}
