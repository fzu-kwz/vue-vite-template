// 创建弹出框添加到body节点，持续3s后移除
export function createTip(message: string) {
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  document.getElementById("app")?.appendChild(tooltip);
  if (tooltip instanceof HTMLElement) {
    tooltip.style.display = "block";
    tooltip.innerHTML = message;
    setTimeout(() => {
      tooltip.style.display = "none";
      document.getElementById("app")?.removeChild(tooltip);
    }, 3000);
  }
}
