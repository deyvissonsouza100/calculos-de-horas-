# Ponto - SAB DOM FERIADOS (CSV)

Versão que funciona **sem XLSX e sem CDN**: entrada e saída em **CSV**.

## Entrada
- Exporte a aba EXPORT do Excel para CSV (Arquivo → Salvar Como → CSV / CSV UTF-8).
- O site detecta separador `;` ou `,`.

## Saída
- Baixa `resultado_ponto.csv` com separador `;` (Excel PT-BR).
- Colunas:
  Data; Entrada; Saida; Entrada; Saida; Horas Normais; Horas Excedidas; Diferenciada; Justificativa; Feriado; Tipo do Dia; Horas em Dobro

## Regras
- Só entra se Horas Normais NÃO estiver vazia.
- Horas em Dobro = (Horas Normais + Horas Excedidas) * 2
- Considera apenas Sábado, Domingo e Feriados (conforme checkboxes).

## Feriados
- Padrão incluído (editável no código).
- Você pode importar um CSV de feriados com colunas DATA e FERIADO/NOME.


## Feriados incluídos
Este projeto já vem com a lista **Belo Horizonte (BH) 2018–2030** embutida como padrão.
