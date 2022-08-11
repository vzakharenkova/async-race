export function toggleDisable(btn: HTMLButtonElement) {
  if (btn.getAttribute('disabled')) {
    btn.removeAttribute('disabled');
  } else {
    btn.setAttribute('disabled', 'disabled');
  }
}

export function toggleDisablePagination(
  amount:number,
  limit:number,
  currPage: number,
  prevBtn:HTMLButtonElement,
  nextBtn:HTMLButtonElement,
) {
  const lastPage = Math.ceil(amount / limit);

  if (amount > limit) {
    if (prevBtn.hasAttribute('disabled') && currPage !== 1) {
      toggleDisable(prevBtn);
    }
    if (nextBtn.hasAttribute('disabled') && currPage !== lastPage) {
      toggleDisable(nextBtn);
    }
    if (!nextBtn.hasAttribute('disabled') && currPage === lastPage) {
      toggleDisable(nextBtn);
    }
    if (!prevBtn.hasAttribute('disabled') && currPage === 1) {
      toggleDisable(prevBtn);
    }
  }

  if (amount <= limit) {
    if (!prevBtn.hasAttribute('disabled')) {
      toggleDisable(prevBtn);
    }
    if (!nextBtn.hasAttribute('disabled')) {
      toggleDisable(nextBtn);
    }
  }
}
