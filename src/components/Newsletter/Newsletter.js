import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

import {
    container,
    form,
    field,
    error,
    submit,
    heading,
    newslettericon,
    containerInner,
} from './Newsletter.module.css'

import NewsLetter from "../../images/icons/newsletter.jpg";
import SendData from '../../services/NewsletterService';

function Newsletter() {
    return (
        <>
            <div className={container}>
                <div className={containerInner}>
                    <div className={heading}>
                        Subscribe to our Newsletter
                    </div>
                    <Formik
                        initialValues={{ email: '', name: '' }}
                        validate={values => {
                            const errors = {};
                            if (!values.name) {
                                errors.name = 'Required';
                            }
                            else {
                                if (!values.email) {
                                    errors.email = 'Required';
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = 'Invalid email address';
                                }
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                                SendData(values.email, values.name)
                            }, 400);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form className={form}>
                                <label htmlFor="name">Name</label>
                                <Field className={field} type="name" name="name" placeholder="Enter your name" />
                                <ErrorMessage className={error} name="name" component="div" />
                                <label htmlFor="email">Email</label>
                                <Field className={field} type="email" name="email" placeholder="Enter your email" />
                                <ErrorMessage className={error} name="email" component="div" />
                                <button className={submit} type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
                <img className={newslettericon} src={NewsLetter} alt="newsletter" />
            </div>
        </>
    )
}

export default Newsletter
