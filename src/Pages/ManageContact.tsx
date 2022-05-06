import { Button, FormGroup, Tag, TextInput } from "@statflo/textkit-ui-library";
import { useFormik } from "formik";
import { Fragment, useState } from "react";
import { v4 as uuid } from  "uuid";
import Modal from "../components/Modal";
import PageTitle from "../components/PageTitle";
import classNames from "../utils/classnames";
import { useContainer } from '../providers/ContainerProvider';
import { useStorage } from "../providers/StorageProvider";

export default function ManageContact() {
    const [open, setOpen] = useState<boolean>(false);
    const { contact, setContact, setNotification } = useContainer();
    const { dispatch, contacts } = useStorage();
    const form = useFormik({
        initialValues: {
            id: '',
            name: '',
            external: '',
            tag: '',
        },
        onSubmit: payload => {
            dispatch({
                type: 'contact/register',
                payload
            });
            setNotification({
                title: 'Successfully saved!',
                message: 'Contact has been added.'
            });
            handleClearForm();
        }
    });

    const handleAddContact = () => {
        form.resetForm();
        form.setFieldValue('id', uuid());
        setOpen(true);
    }

    const handleClearForm = () => {
        setOpen(false);
        form.resetForm();
    }

    const handleEditContact = (key: string) => {
        form.setFieldValue('id', contacts[key].id);
        form.setFieldValue('name', contacts[key].name);
        form.setFieldValue('external', contacts[key].external);
        form.setFieldValue('tag', contacts[key].tag);
        setOpen(true);
    }

    const handleDeleteContact = (payload: string) => {
        dispatch({
            type: 'widget/delete',
            payload
        });
        setNotification({
            title: 'Successfully deleted!',
            message: 'Contact has been deleted.'
        });
        handleClearForm();

        if (payload === contact) {
            setContact(undefined);
        }
    }

    return (
        <Fragment>
            <div className="inline-block min-w-full align-middle space-y-6">
                <PageTitle 
                    title="Manage Contacts"
                    description="A list of contacts added to the playground."
                    label="Add Contact"
                    onClick={handleAddContact}
                />
                <div className="-mx-4 mt-10 ring-1 ring-gray-spacer sm:-mx-6 md:mx-0 md:rounded-lg bg-white overflow-hidden shadow-md">
                    <table className="min-w-full divide-y divide-gray-spacer">
                        <thead>
                            <tr>
                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-default sm:pl-6">
                                    Name
                                </th>
                                <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-default lg:table-cell">
                                    External
                                </th>
                                <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-default lg:table-cell">
                                    Tag
                                </th>
                                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                    <span className="sr-only">Select</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(contacts).map((key, index) => (
                                <tr key={key}>
                                    <td
                                        className={classNames(
                                            index === 0 ? '' : 'border-t border-transparent',
                                            'relative py-4 pl-4 sm:pl-6 pr-3 text-sm'
                                        )}
                                    >
                                        <div className="font-medium text-gray-default">
                                            {contacts[key].name}
                                        </div>
                                        {index !== 0 ? <div className="absolute right-0 left-6 -top-px h-px bg-gray-spacer" /> : null}
                                    </td>
                                    <td
                                        className={classNames(
                                            index === 0 ? '' : 'border-t border-gray-spacer',
                                            'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                                        )}
                                    >
                                        {contacts[key].external}
                                    </td>
                                    <td
                                        className={classNames(
                                            index === 0 ? '' : 'border-t border-gray-spacer',
                                            'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                                        )}
                                    >
                                        {contacts[key].tag ? <Tag type="success">{contacts[key].tag}</Tag> : null}
                                    </td>
                                    <td
                                        className={classNames(
                                            index === 0 ? '' : 'border-t border-transparent',
                                            'relative py-3.5 pl-3 pr-4 sm:pr-6 text-right text-sm font-medium space-x-3'
                                        )}
                                    >
                                        <button
                                            type="button"
                                            onClick={() => handleEditContact(key)}
                                            className="inline-flex items-center rounded-md border border-gray-spacer bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-default shadow-sm hover:bg-gray-hover focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                                        >
                                            Edit<span className="sr-only"></span>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleDeleteContact(key)}
                                            className="inline-flex items-center rounded-md border border-gray-spacer bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-default shadow-sm hover:bg-gray-hover focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                                        >
                                            Delete<span className="sr-only"></span>
                                        </button>
                                        {index !== 0 ? <div className="absolute right-6 left-0 -top-px h-px bg-gray-spacer" /> : null}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal
                title="Contact"
                open={open}
                setOpen={setOpen}
            >
                <form onSubmit={form.handleSubmit} className="space-y-2">
                    <FormGroup label="Name" required>
                        <TextInput
                            autoFocus
                            required
                            value={form.values.name}
                            onChange={form.handleChange('name')}
                        />
                    </FormGroup>
                    <FormGroup label="External ID" required>
                        <TextInput
                            required
                            value={form.values.external}
                            onChange={form.handleChange('external')}
                        />
                    </FormGroup>
                    <FormGroup label="Tag">
                        <TextInput
                            value={form.values.tag}
                            onChange={form.handleChange('tag')}
                        />
                    </FormGroup>
                    <div className="space-x-2">
                        <Button type="submit">Save</Button>
                        <Button onClick={handleClearForm} type="button" reversed>Cancel</Button>
                    </div>
                </form>
            </Modal>
        </Fragment>
    )
}