<template>
    <div>

        <h1>Gestión de estudiantes</h1>
        {{mensaje}}
    <br/>
        <b-form action="javascript:void(0)" onsubmit="crearEstudiante()">
                    <b-form-group>
                        <label for="id">identificación</label>
                        <b-form-input type="Number" class="form-control" placeholder="Ingrese su identificación" id="id">
                    </b-form-group>

                    <b-form-group>
                        <label for="nombre">Nombre</label>
                        <b-form-input type="text" class="form-control" placeholder="Ingrese su Nombre" id="nombre"></b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <label for="apellido">Apellido</label>
                        <b-form-input type="text" class="form-control" placeholder="Ingrese su Apellido" id="apellido"></b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <label for="edad">edad</label>
                        <b-form-input type="Number" class="form-control" placeholder="Ingrese su edad" id="edad"></b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <label for="correo">correo</label>
                        <b-form-input type="text" class="form-control" placeholder="Ingrese su Correo" id="correo"></b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <label for="carrera">Carrera</label>
                        <select class="form-control" name="carrera" id="carrera">
                            <option value="001">Ingeniería de sistemas</option>
                            <option value="002">Derecho</option>
                            <option value="003">Comunicación</option>
                        </select>
                    </b-form-group>
                    <!--
                    <b-form-input id="btncrearEstudiante"class="btn btn-primary" type="button" value="crear estudiante"></b-form-input>
                    <b-form-input id="btnactualizarEstudiante"class="btn btn-primary" type="button" value="actualizar estudiante" onClick="actualizarEstudiante()"></b-form-input>
                    -->
        </b-form>
    
    </div>
</template>

<script>
export default {
    data(){
        return {
            mensaje:"Hola Estudiantes"
        }
    }
}
</script>