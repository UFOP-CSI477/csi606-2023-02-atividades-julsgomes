CSI606-2021-02 - Remoto - Proposta de Trabalho Final

Aluna(o): Júlia Roberta Gomes Miguel

--------------

<!-- Descrever um resumo sobre o trabalho. -->

TECHBLOG
Este projeto consiste na criação um site do tipo blog voltado para a criação e publicação de posts, sendo desenvolvido com propósitos acadêmicos, visando a aplicação dos conhecimentos sobre banco de dados NoSQL.

How to run
Instalar o servidor MongoDB e o Python:

Certifique-se de ter o servidor MongoDB instalado em sua máquina. Você pode baixá-lo no site oficial do MongoDB.
Instale o Python se ainda não estiver instalado. Você pode baixá-lo em python.org.
Instalar as dependências:

Abra o terminal ou prompt de comando.

Navegue até o diretório do projeto onde está localizado o arquivo requirements.txt.

Execute o seguinte comando para instalar as dependências:

pip install -r requirements.txt
Alterar informações sobre o banco de dados em app.py:

Abra o arquivo app.py no seu editor de texto ou IDE.

Vá para a linha 11 e substitua 'mongodb://localhost:27017/' pela sua URI do MongoDB, se necessário. Mantenha o nome do BD ('blog') após a URI. Por exemplo:

app.config['MONGO_URI'] = 'mongodb://localhost:27017/blog'
Executar a aplicação:

No diretório do projeto onde está localizado o arquivo app.py, execute o seguinte comando no terminal ou prompt de comando:

python app.py
Isso iniciará o servidor Flask.

Acessar o site:

Abra um navegador web.
Vá para http://127.0.0.1:5000/ para acessar o site.
