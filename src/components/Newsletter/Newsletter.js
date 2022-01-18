import React, { useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import SubscribeUser from '../../services/NewsletterService/NewsletterService'

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
import { supabase } from '../../services/NewsletterService/supabaseClient';

function Newsletter() {
    const [session, setSession] = useState(null)

    useEffect(() => {
        setSession(supabase.auth.session())

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    }, [session])

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
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            setTimeout(() => {
                                setSubmitting(true)
                                const { name, email } = values;
                                SubscribeUser(name, email);
                                setSubmitting(false);
                                resetForm();
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
