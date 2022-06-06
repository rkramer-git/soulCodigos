public class Main {
    public static void main(String[] args) {

        Funcionario f1 = new Funcionario("Carlos", 35, "Motorista", Funcionario.Situação.ATIVO);
        Funcionario f2 = new Funcionario("Maria", 35, "Merendeira", Funcionario.Situação.ATIVO);
        Funcionario f3 = new Funcionario("Joao", 35, "Contador", Funcionario.Situação.ATIVO);
        Funcionario f4 = new Funcionario("Jose", 35, "Diretor", Funcionario.Situação.ATIVO);

        f1.demitirFuncionario();//  demitir o funcionário 1
        System.out.println();

        f2.trocarCargoFuncionario("Supervisora");// promover o funcionário 2
        System.out.println();

        f3.aniversário();// "aniversariar" o funcionário 3
        System.out.println();

        f4.pagarSalario(1200.52);// pagar salário do funcionário 4
        System.out.println();
    }
}