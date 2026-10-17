// Hero draft card (HeroDraftCard.astro): Approve / Undo. Runs in every JS mode, no GSAP.
// Without JS the actions keep `inert`, so the card reads as a static draft with no layout shift.
export function initHeroCard() {
  document.querySelectorAll<HTMLElement>('[data-draft-card]').forEach((card) => {
    const actions = card.querySelector<HTMLElement>('[data-actions]');
    const approve = card.querySelector<HTMLButtonElement>('[data-approve]');
    const undo = card.querySelector<HTMLButtonElement>('[data-undo]');
    const approved = card.querySelector<HTMLElement>('[data-approved]');
    const chip = card.querySelector<HTMLElement>('[data-chip]');
    const note = card.querySelector<HTMLElement>('[data-note]');
    if (!actions || !approve || !undo || !approved || !chip || !note) return;

    const { statusDraft = '', statusApproved = '', approvedNote = '' } = card.dataset;

    const setApproved = (isApproved: boolean) => {
      card.dataset.state = isApproved ? 'approved' : 'draft';
      chip.classList.toggle('chip-draft', !isApproved);
      chip.classList.toggle('chip-ok', isApproved);
      chip.textContent = isApproved ? statusApproved : statusDraft;
      approve.hidden = isApproved;
      approved.hidden = !isApproved;
      undo.hidden = !isApproved;
      note.textContent = isApproved ? approvedNote : '';
      (isApproved ? undo : approve).focus();
    };

    approve.addEventListener('click', () => setApproved(true));
    undo.addEventListener('click', () => setApproved(false));
    actions.removeAttribute('inert');
  });
}
