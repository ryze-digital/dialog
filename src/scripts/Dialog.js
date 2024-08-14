import * as adventure from '@adventure/js-utilities';

/**
 * Erweitert das dialog-Element um Animationen und Buttons zum Öffnen und Schließen.
 */
export class Dialog extends adventure.Base {
    /**
     *
     * @param {Object} options
     * @param {HTMLDialogElement} [options.el=document.querySelector('[data-dialog]')]
     * @param {Boolean} [options.modal=true]
     */
    constructor (options = {}) {
        const el = document.querySelector('[data-dialog]');

        if (el.hasAttribute('open')) {
            options.modal = false;
        }

        super({
            el,
            modal: true
        }, options);

        this.openTriggers = document.querySelectorAll(`[data-open-dialog="${this.options.el.id}"]`);
        this.closeButton = this.options.el.querySelector('[data-close-dialog]');
    }
    /**
     *
     * @method init
     * @public
     */
    init () {
        this.openTriggers.forEach((trigger) => {
            trigger.addEventListener('click', (event) => {
                event.preventDefault();
                this.open();
            });
        });

        if (this.closeButton !== null) {
            this.closeButton.addEventListener('click', this.close.bind(this));
        }
    }
    /**
     *
     * @method open
     * @fires Dialog#open
     * @public
     */
    open () {
        if (this.options.modal === true) {
            this.options.el.showModal();
        } else {
            this.options.el.show();
        }

        /**
         * @event Dialog#open
         */
        this.animateIn().onfinish = this.emitEvent.bind(this, 'open');
    }
    /**
     *
     * Startet die Öffnen-Animation des Dialog.
     * Überschreibe diese Methode, wenn andere Öffnen-Animation gewünscht ist.
     * @method animateIn
     * @public
     */
    animateIn () {
        return this.options.el.animate([{
            opacity: 0,
            scale: 0.8
        }, {
            opacity: 1,
            scale: 1
        }], {
            duration: 300,
            easing: 'cubic-bezier(0.6, 0, 0.4, 1)',
        });
    }
    /**
     *
     * @method close
     * @public
     */
    close () {
        this.options.el.close();
    }
}