import { bootstrapForm } from "@servicestack/client";

declare var CONTACT:any;

const form = document.querySelector("form")!;
bootstrapForm(form,{
    model: CONTACT,
    success: function () {
        location.href = '/client-ts/contacts/';
    }
});
