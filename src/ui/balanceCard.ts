export function renderBalanceCard(container: HTMLElement, saldo: number) {
  container.innerHTML = `
    <div class="card">
      <h2>Saldo Disponível</h2>
      <p class="amount">R$ ${saldo.toFixed(2)}</p>
    </div>
  `;
}