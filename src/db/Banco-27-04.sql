CREATE SCHEMA IF NOT EXISTS projeto_tecnico_2026;

USE projeto_tecnico_2026;
 
-- =========================

-- LOCALIZAÇÃO

-- =========================
 
CREATE TABLE Estados (

  estadoID INT AUTO_INCREMENT PRIMARY KEY,

  nome VARCHAR(50) NOT NULL

);
 
CREATE TABLE Cidades (

  cidadeID INT AUTO_INCREMENT PRIMARY KEY,

  nome VARCHAR(100) NOT NULL,

  estadoID INT,

  FOREIGN KEY (estadoID) REFERENCES Estados(estadoID)

);
 
-- =========================

-- ÁREA DE ATUAÇÃO

-- =========================
 
CREATE TABLE AreaAtuacao (

  areaAtuacaoID INT AUTO_INCREMENT PRIMARY KEY,

  nome VARCHAR(100),

  descricao TEXT

);
 
-- =========================

-- USUÁRIOS (DOADORES)

-- =========================
 
CREATE TABLE Usuario (

  usuarioID INT AUTO_INCREMENT PRIMARY KEY,

  nome VARCHAR(200) NOT NULL,

  email VARCHAR(200) UNIQUE NOT NULL,

  senha VARCHAR(255) NOT NULL,

  telefone VARCHAR(20),

  dataNascimento DATE,

  cidadeID INT,

  estadoID INT,

  FOREIGN KEY (cidadeID) REFERENCES Cidades(cidadeID),

  FOREIGN KEY (estadoID) REFERENCES Estados(estadoID)

);
 
-- =========================

-- ONGS

-- =========================
 
CREATE TABLE Ongs (

  ongsID INT AUTO_INCREMENT PRIMARY KEY,

  nome VARCHAR(200) NOT NULL,

  cnpj VARCHAR(20) UNIQUE NOT NULL,

  email VARCHAR(200) UNIQUE,

  senha VARCHAR(255),

  descricao TEXT,

  areaAtuacaoID INT,

  cidadeID INT,

  estadoID INT,

  status ENUM('pendente','aprovada','rejeitada') DEFAULT 'pendente',
 
  FOREIGN KEY (areaAtuacaoID) REFERENCES AreaAtuacao(areaAtuacaoID),

  FOREIGN KEY (cidadeID) REFERENCES Cidades(cidadeID),

  FOREIGN KEY (estadoID) REFERENCES Estados(estadoID)

);
 
-- =========================

-- EMPRESAS PARCEIRAS

-- =========================
 
CREATE TABLE Empresas (

  empresaID INT AUTO_INCREMENT PRIMARY KEY,

  nome VARCHAR(200) NOT NULL,

  cnpj VARCHAR(20) UNIQUE NOT NULL,

  email VARCHAR(200),

  senha VARCHAR(255),

  cidadeID INT,

  estadoID INT,
 
  FOREIGN KEY (cidadeID) REFERENCES Cidades(cidadeID),

  FOREIGN KEY (estadoID) REFERENCES Estados(estadoID)

);
 
-- =========================

-- CARTEIRAS (SALDOS)

-- =========================
 
-- Usuário

CREATE TABLE CarteiraUsuario (

  usuarioID INT PRIMARY KEY,

  saldo DECIMAL(10,2) DEFAULT 0,

  FOREIGN KEY (usuarioID) REFERENCES Usuario(usuarioID)

);
 
-- ONG

CREATE TABLE CarteiraOng (

  ongsID INT PRIMARY KEY,

  saldo DECIMAL(10,2) DEFAULT 0,

  FOREIGN KEY (ongsID) REFERENCES Ongs(ongsID)

);
 
-- Empresa

CREATE TABLE CarteiraEmpresa (

  empresaID INT PRIMARY KEY,

  saldo DECIMAL(10,2) DEFAULT 0,

  FOREIGN KEY (empresaID) REFERENCES Empresas(empresaID)

);
 
-- =========================

-- COMPRA DE CRÉDITOS

-- =========================
 
CREATE TABLE ComprasCreditos (

  compraID INT AUTO_INCREMENT PRIMARY KEY,

  usuarioID INT,

  valorPago DECIMAL(10,2) NOT NULL,

  creditosGerados DECIMAL(10,2) NOT NULL,

  dataCompra DATETIME DEFAULT CURRENT_TIMESTAMP,

  status VARCHAR(50),
 
  FOREIGN KEY (usuarioID) REFERENCES Usuario(usuarioID)

);
 
-- =========================

-- DOAÇÕES (USUÁRIO -> ONG)

-- =========================
 
CREATE TABLE Doacoes (

  doacaoID INT AUTO_INCREMENT PRIMARY KEY,

  usuarioID INT,

  ongsID INT,

  valor DECIMAL(10,2),

  data DATETIME DEFAULT CURRENT_TIMESTAMP,
 
  FOREIGN KEY (usuarioID) REFERENCES Usuario(usuarioID),

  FOREIGN KEY (ongsID) REFERENCES Ongs(ongsID)

);
 
-- =========================

-- USO DE CRÉDITOS (ONG -> EMPRESA)

-- =========================
 
CREATE TABLE UsoCreditosOng (

  usoID INT AUTO_INCREMENT PRIMARY KEY,

  ongsID INT,

  empresaID INT,

  valor DECIMAL(10,2),

  data DATETIME DEFAULT CURRENT_TIMESTAMP,
 
  FOREIGN KEY (ongsID) REFERENCES Ongs(ongsID),

  FOREIGN KEY (empresaID) REFERENCES Empresas(empresaID)

);
 
-- =========================

-- CONVERSÃO (EMPRESA -> DINHEIRO)

-- =========================
 
CREATE TABLE ConversaoCreditos (

  conversaoID INT AUTO_INCREMENT PRIMARY KEY,

  empresaID INT,

  valorCreditos DECIMAL(10,2),

  valorReais DECIMAL(10,2),

  data DATETIME DEFAULT CURRENT_TIMESTAMP,
 
  FOREIGN KEY (empresaID) REFERENCES Empresas(empresaID)

);
 