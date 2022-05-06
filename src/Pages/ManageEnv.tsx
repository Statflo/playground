import { Button, FormGroup, TextInput } from '@statflo/textkit-ui-library';
import { useFormik } from 'formik';
import { Fragment, useState } from 'react';
import { v4 as uuid } from "uuid";
import { useContainer } from '../providers/ContainerProvider';
import Modal from '../components/Modal';
import PageTitle from '../components/PageTitle';
import classNames from '../utils/classnames';
import { useStorage } from '../providers/StorageProvider';

export default function ManageEnv() {
    const [open, setOpen] = useState<boolean>(false);
    const { env, setEnv, setNotification } = useContainer();
    const { envs, dispatch } = useStorage();
    const form = useFormik({
        initialValues: {
            id: '',
            name: '',
        },
        onSubmit: payload => {
            dispatch({
                type: 'env/register',
                payload
            });
            setNotification({
                title: 'Successfully saved!',
                message: 'Environment has been created.'
            });
            handleClearForm();
        }
    });

    const handleAddEnv = () => {
        form.resetForm();
        form.setFieldValue('id', uuid());
        setOpen(true);
    }

    const handleClearForm = () => {
        setOpen(false);
        form.resetForm();
    }

    const handleEditEnv = (key: string) => {
        form.setFieldValue('id', key);
        form.setFieldValue('name', envs[key].name);
        setOpen(true);
    }

    const handleDeleteEnv = (payload: string) => {
        dispatch({
            type: 'env/delete',
            payload
        });
        setNotification({
            title: 'Successfully deleted!',
            message: 'Environment and all widgets have been deleted.'
        });

        if (env === payload) {
            const result = Object.keys(envs).filter(val => val !== payload);
            setEnv(
                (result.length > 0) ? result[0] : undefined
            );
        }
    }

    return (
        <Fragment>
            <div className="inline-block min-w-full align-middle space-y-6">
                <PageTitle 
                    title="Manage Environments"
                    description="A list of enviroments to organize your widgets."
                    label="Add Environment"
                    onClick={handleAddEnv}
                />
                <div className="-mx-4 mt-10 ring-1 ring-gray-spacer sm:-mx-6 md:mx-0 md:rounded-lg bg-white overflow-hidden shadow-md">
                    <table className="min-w-full divide-y divide-gray-spacer">
                        <thead>
                            <tr>
                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-default sm:pl-6">
                                    Name
                                </th>
                                {/* <th
                                    scope="col"
                                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-default lg:table-cell"
                                >
                                    Memory
                                </th> */}
                                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                    <span className="sr-only">Select</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(envs).map((key, index) => (
                                <tr key={key}>
                                    <td
                                        className={classNames(
                                            index === 0 ? '' : 'border-t border-transparent',
                                            'relative py-4 pl-4 sm:pl-6 pr-3 text-sm'
                                        )}
                                    >
                                        <div className="font-medium text-gray-default">
                                            {envs[key].name}
                                        </div>
                                        {index !== 0 ? <div className="absolute right-0 left-6 -top-px h-px bg-gray-spacer" /> : null}
                                    </td>
                                    {/* <td
                                        className={classNames(
                                            index === 0 ? '' : 'border-t border-gray-spacer',
                                            'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                                        )}
                                    >
                                        {plan.memory}
                                    </td> */}
                                    <td
                                        className={classNames(
                                            index === 0 ? '' : 'border-t border-transparent',
                                            'relative py-3.5 pl-3 pr-4 sm:pr-6 text-right text-sm font-medium space-x-3'
                                        )}
                                    >
                                        <button
                                            type="button"
                                            onClick={() => handleEditEnv(key)}
                                            className="inline-flex items-center rounded-md border border-gray-spacer bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-default shadow-sm hover:bg-gray-hover focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                                        >
                                            Edit<span className="sr-only"></span>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleDeleteEnv(key)}
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
                title="Environment"
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
                    <div className="space-x-2">
                        <Button type="submit">Save</Button>
                        <Button onClick={handleClearForm} type="button" reversed>Cancel</Button>
                    </div>
                </form>
            </Modal>
        </Fragment>
    )
}