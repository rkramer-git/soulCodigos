public class Funcionario {

        String Nome = "";
        Integer Idade= 0;
        String Cargo= "";
        Situação TipoSituação = Situação.ATIVO; // (ativo/inativo)

        public Funcionario(String nome, Integer idade, String cargo, Situação tipoSituação) {
                Nome = nome;
                Idade = idade;
                Cargo = cargo;
                TipoSituação = tipoSituação;
        }

        public String getNome() {
                return Nome;
        }

        public void setNome(String nome) {
                Nome = nome;
        }

        public Integer getIdade() {
                return Idade;
        }

        public void setIdade(Integer idade) {
                Idade = idade;
        }

        public String getCargo() {
                return Cargo;
        }

        public void setCargo(String cargo) {
                Cargo = cargo;
        }

        public Situação getSituação() {
                return TipoSituação;
        }

        public void setTipoSituação(Situação situação) {
                TipoSituação = situação;
        }

        public enum Situação  {
                ATIVO, INATIVO;
        }

        public void demitirFuncionario(){
                this.TipoSituação = Situação.INATIVO;
                System.out.println(this.Nome + " demitido com sucesso ");

        }

        public void trocarCargoFuncionario(String cargo){
                this.Cargo = cargo;
                System.out.println( cargo + " eh o novo cargo de " + this.Nome);
        }

        public void pagarSalario(Double valor){
                System.out.println("Salario transferido no valor de " + valor + " para o " + this.Nome);
        }

        public void aniversário(){
                Integer IdadeAntiga = Idade;
                Idade++;

                System.out.println(this.Nome + " passou de "+ IdadeAntiga + " para "  + Idade + " anos de idade");

        }
}
