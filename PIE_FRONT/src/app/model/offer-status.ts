export enum OfferStatus {
    /**
     * the offer not manipulated yet by admin
     */
    IN_PROGRESS = 'In Progress',
    /**
     * the offer approved by admin and sent to the developer
     */
     APPROVED = 'Approved',
    /**
     * the admin ignored the offer
     */
    IGNORED = 'Ignored',
    /**
     * the admin reject the offer
     */
    REJECTED = 'Rejected',
    /**
     * the company canceled the offer before hire any one
     */
    CANCELED = ' Canceled',
    /**
     * the Employee accepted the offer
     */
    ACCEPTED = 'Accepted',
    /**
     * the company hire an employee and the offer finished
     */
    FINISHED = 'Finished',
}